
import subprocess
ProjectPATH=""
SONARPATH="C:/Users/abderrazzak/Desktop/sonarqube-8.3.1.34397/bin/windows-x86-64/StartSonar.bat" #Path your StartSonar.bat
def main():
    try:
     p=subprocess.Popen([SONARPATH])
     if p.pid > 0:
       
       print("Process created with PID:", p.pid)
    except ImportError as exc:

        print("this is the right path where your sonart start is PYTHONPATH ? ")
    
if __name__ == '__main__':
    main()