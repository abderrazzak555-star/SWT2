import os
import json
ProjectPath="C:/Users/abderrazzak/Desktop/SWT2/sft2/django-projekt/"# Projekt path 
import shutil
from shutil import copyfile
from threading import Thread
src = 'C:/Users/abderrazzak/Desktop/SWT2/sft2/test.py'
dst = ' C:/Users/abderrazzak/Desktop/SWT2/sft2/django-projekt/test2.py'
#copyfile(src, dst)
#Thread(target=shutil.copy, args=[src, dst]).start()
#os.popen('copy C:/Users/abderrazzak/Desktop/SWT2/sft2/test.py C:/Users/abderrazzak/Desktop/SWT2/sft2/django-projekt ')
#shutil.copyfile(original, target)
os.system("cd"+ProjectPath)
os.system("coverage run *.py ")
print("all sind getestet")
os.system("coverage json")
print("es wird erfolgreich coverage report transformiert")

f=open("coverage.json")
data = json.load(f)
print("total coverage : ")
print(data["totals"]["percent_covered"])
f.close()
