import os
import json
ProjektPath="/Users/abderrazzakaarab/Desktop/abdu/"#path project
os.system("coverage run *.py ")
print("all sind getestet")
os.system("coverage json")
print("es wird erfolgreich coverage report transformiert")

f=open(ProjektPath+"coverage.json")
data = json.load(f)
print("total coverage :")
print(data["totals"]["percent_covered"])
f.close()
