import os
import json

directory="data//questions//"

global json_dict
json_dict={}


def process(path):
    global json_dict
    with open(path, "r", encoding="utf-8") as f:
        data=json.load(f)
    json_dict[data["ID"]]=data


def make_html(files, json):
    with open("data//quiz.template.html", "r", encoding="utf-8") as temp:
        template=temp.read()
    ID=json["ID"]
    category=json["category"]
    subcategory=json["subcategory"]
    points=json["points"]
    path="questions//" + subcategory + "//" + ID + ".html"
    
    index=files[ID[2]].index(ID)
    #print(index)
    if index == 0:
        before="../"+subcategory+".html"
        after=files[ID[2]][index+1]+".html"
    elif index == len(files[ID[2]]) -1:
        before=files[ID[2]][index-1]+".html"
        after="../"+subcategory+".html"
    else:
        before=files[ID[2]][index-1]+".html"
        after=files[ID[2]][index+1]+".html"
    #print(before, ID, after)
    question=json["question"]
    answers="\n"

    for key, value in json["answers"].items():
        # <li><label><input type="checkbox" name="q1" value="{{key}}"> {{value}}</label></li>
        answers+='                        <li><label><input type="checkbox" name="q1" value="'+key+'">'+value+'</label></li>' +"\n"
        
    template=template.replace("{{ID}}", ID)
    template=template.replace("{{category}}", category)
    template=template.replace("{{subcategory}}", subcategory )
    template=template.replace("{{points}}", str(points))
    template=template.replace("{{question}}",question)
    template=template.replace("{{answers}}",answers)
    template=template.replace("{{before}}",before)
    template=template.replace("{{after}}",after)
    
    with open(path, "w", encoding="utf-8") as file:
        file.write(template)
        #data=json.loads(site)
    #print(json)

        
with open("data//questions.json", "w", encoding="utf-8") as f:
    print("converting jsons to quizzes")
    if os.path.isdir(directory):
       
        print("\nIt is a directory")
        all_files=[]
        for subdir, dirs, files in os.walk(directory):
            for file in files:
                if file.endswith(".json"):
                    path = os.path.join(subdir, file)
                    process(path)
                    
    json.dump(json_dict,f)
    
with open("data//quizzes.txt", "w", encoding="utf-8") as f:
    f.write("//copy the input of the file data/quizzes.txt to main.js line 72\n")
    print("copy this into main.js line 72 OR copy the input of the file data/quizzes.txt to main.js line 72\n")
    for key, value in json_dict.items():
        #quizzes['1.1.01-003'] = new Quiz('1.1.01-003', [['a', 'b']]);
        ID=key
        answers=""
        for index in range(len(json_dict[key]["right_answers"])):
            answers+="'"+json_dict[key]["right_answers"][index]+"'"
            if index != len(json_dict[key]["right_answers"]) -1:
                answers+=","
            #print(index, len(json_dict[key]["right_answers"]))
            #print(json_dict[key]["right_answers"][index])
        #print(answers)
        q="    quizzes['" + ID + "'] = new Quiz('" + ID + "', [[" + answers + "]]);"
        print(q)
        f.write(q)
        f.write("\n")
       

    
with open("data//questions.json", "r", encoding="utf-8") as f:
    print("making htmls")
    sites=f.read()
    sites=json.loads(sites)
    keys=list(sites.keys())
    files={}
    for key in keys:
        if key[2] not in files.keys():
            files[key[2]]=[]
        files[key[2]].append(key)
    print(files)
    
    for key, value in sites.items():
        make_html(files, value)
    
        
print("done")
