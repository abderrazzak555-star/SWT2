import time
from threading import Thread, Lock

crawlerShouldRun = False
crawlerStatus = "Not running"

def setCrawlerStatus(status, showWhetherStopping = True):
    global crawlerStatus, crawlerShouldRun
    if (showWhetherStopping and crawlerShouldRun == False):
        status += " (stopping)"
    crawlerStatus = status
def getCrawlerStatus():
    global crawlerStatus
    return crawlerStatus


class Crawler(Thread):
    def __init__(self):
        Thread.__init__(self)
        global crawlerShouldRun
        crawlerShouldRun = True
        setCrawlerStatus("Initializing")

    def run(self):
        global crawlerShouldRun
        while(crawlerShouldRun): # main Loop
            setCrawlerStatus("Hallo")
            time.sleep(5)
            setCrawlerStatus("Welt")
            time.sleep(5)
        
        # publicate that Crawler is shutting down
        setCrawlerStatus("Not running", False)


crawler = None

def startCrawler():
    global crawler
    if (isCrawlerRunning()):
        return # crawler already running, no need to start

    crawler = Crawler()
    crawler.start()

def stopCrawler():
    global crawlerShouldRun
    crawlerShouldRun = False
    setCrawlerStatus(getCrawlerStatus(), True)

def isCrawlerRunning():
    global crawler
    return crawler != None and crawler.is_alive()