import time
from threading import Thread, Lock


crawlerStatus = "Not running";
def setCrawlerStatus(status):
    global crawlerStatus
    crawlerStatus = status
def getCrawlerStatus():
    global crawlerStatus
    return crawlerStatus


class Crawler(Thread):
    def __init__(self):
        Thread.__init__(self)
        setCrawlerStatus("Initializing")
        self.shouldRun = True

    def run(self):
        while(self.shouldRun): # main Loop
            setCrawlerStatus("Hallo")
            time.sleep(5)
            setCrawlerStatus("Welt")
            time.sleep(5)
        
        # publicate that Crawler is shutting down
        setCrawlerStatus("Not running")

    def stop(self):
        self.shouldRun = False


crawler = None

def startCrawler():
    global crawler
    if (isCrawlerRunning()):
        return # crawler already running, no need to start

    crawler = Crawler()
    crawler.start()

def stopCrawler():
    global crawler
    if (crawler != None):
        crawler.stop()

def isCrawlerRunning():
    global crawler
    return crawler != None and crawler.is_alive()