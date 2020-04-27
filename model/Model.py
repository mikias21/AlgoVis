from bs4 import BeautifulSoup
import requests


class Model(object):
    def __init__(self):
        self.soup = None
        self.url = "https://en.wikipedia.org/wiki/"
        self.firstHeading = ""
        self.intoParagraph = ""
        self.content = []

    def get_algorithm_info(self, algoType):
        self.firstHeading = ""
        real_path = self.url + algoType
        data = requests.get(real_path)
        content = data.content
        self.soup = BeautifulSoup(content, features='html.parser')
        performance_text_more = ""
        performance_text = ""
        try:
            self.intoParagraph = self.soup.find("p").text
            analysis_text = self.soup.find_all("div", {"class": "thumbcaption"})[0].text
            performance_text += self.soup.select('#mw-content-text > div > p:nth-child(10)')[0].text
            performance_text_more += self.soup.select('#mw-content-text > div > p:nth-child(11)')[0].text
        except IndexError as e:
            pass
        self.firstHeading += self.soup.find("h1", {"id": "firstHeading"}).text
        return self.intoParagraph, analysis_text, performance_text, performance_text_more, self.firstHeading

    def get_linkedlist_info(self, type="linked list"):
        disadvantages = []
        disadvantages_str = ""
        real_path = self.url + type
        data = requests.get(real_path)
        content = data.content
        self.soup = BeautifulSoup(content, features='html.parser')
        try:
            self.firstHeading = self.soup.find("h1", {"id", "firstHeading"}).text
            self.intoParagraph = self.soup.select("#mw-content-text > div > p")[0].text
            disadvantages = self.soup.select("#mw-content-text > div > ul:nth-child(11) > li")
        except Exception:
            pass

        for i in disadvantages:
            disadvantages_str += i.text

        return self.firstHeading, self.intoParagraph, disadvantages_str

    def get_stack_info(self, type="stack"):
        notes = []
        operations_implementations = []
        notes_str = ""
        operations_str = ""
        if type == 'stack' or type == 'Stack':
            type = "Stack_(abstract_data_type)"
        real_path = self.url + type
        data = requests.get(real_path)
        content = data.content
        self.soup = BeautifulSoup(content, features="html.parser")
        try:
            self.firstHeading = self.soup.find("h1", {"id", "firstHeading"}).text
            notes.append(self.soup.select("#mw-content-text > div > div:nth-child(1)")[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(5)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(7)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(8)')[0].text)
            operations_implementations.append(self.soup.select('#mw-content-text > div > p:nth-child(17)')[0].text)
            operations_implementations.append(self.soup.select('#mw-content-text > div > p:nth-child(22)')[0].text)
        except Exception as e:
            pass

        for i in notes:
            notes_str += i
        for i in operations_implementations:
            operations_str += i
        return self.firstHeading, notes_str, operations_str

    def get_queue_info(self , type="queue"):
        notes = []
        implementation = []
        notes_str = ""
        implementation_str = ""
        if type == 'queue' or type == 'Queue':
            type = "Queue_(abstract_data_type)"
        real_path = self.url + type
        data = requests.get(real_path)
        content = data.content
        self.soup = BeautifulSoup(content , "html.parser")
        try:
            self.firstHeading = self.soup.find("h1", {"id", "firstHeading"}).text
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(4)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(5)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(6)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(7)')[0].text)
            implementation.append(self.soup.select('#mw-content-text > div > p:nth-child(10)')[0].text)
            implementation.append(self.soup.select('#mw-content-text > div > p:nth-child(11)')[0].text)
        except Exception as e:
            pass
        for i in notes:
            notes_str += i
        for i in implementation:
            implementation_str += i
        # print(implementation_str)
        return self.firstHeading , notes_str , implementation_str

    def get_more_queue_info(self, type):
        if type == 'Circular Queue':
            type = 'Circular_buffer'
        notes = []
        other_notes = []
        notes_str = ""
        other_notes_str = ""
        real_path = self.url + type
        data = requests.get(real_path)
        content = data.content
        self.soup = BeautifulSoup(content , "html.parser")
        try:
            self.firstHeading = self.soup.find("h1", {"id", "firstHeading"}).text
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(7)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(8)')[0].text)
            notes.append(self.soup.select('#mw-content-text > div > p:nth-child(9)')[0].text)
            other_notes.append(self.soup.select('#mw-content-text > div > p:nth-child(42)')[0].text)
        except Exception as e:
            pass
        for i in notes:
            notes_str += i
        for i in other_notes:
            other_notes_str += i

        return self.firstHeading , notes_str , other_notes_str

    def getTreeInfo(self):
        intro = []
        terms = []
        intro_text = ""
        terms_text = ""
        traversals_text = ""
        real_path = self.url + 'Tree_(data_structure)'
        content = requests.get(real_path).content
        self.soup = BeautifulSoup(content, features='html.parser')
        try:
            self.firstHeading = self.soup.find("h1", {"id", "firstHeading"}).text
            intro.append(self.soup.select('#mw-content-text > div > p:nth-child(6)')[0].text)
            intro.append(self.soup.select('#mw-content-text > div > p:nth-child(7)')[0].text)
            intro.append(self.soup.select('#mw-content-text > div > p:nth-child(8)')[0].text)
            traversals_text += self.soup.select('#mw-content-text > div > p:nth-child(248)')[0].text

            for i in range(148, 200, 2):
                terms.append(self.soup.select('#mw-content-text > div > dd:nth-child({})'.format(i))[0].text)

        except Exception as e:
            pass
        for i in intro:
            intro_text += i
        for i in terms:
            terms_text += i

        return self.firstHeading, intro_text, terms_text, traversals_text



model = Model()
model.getTreeInfo()
