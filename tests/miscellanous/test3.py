from selenium import webdriver
from selenium.webdriver.common.by import By

driver = webdriver.Chrome()

driver.get("http://localhost:4200/")


title = driver.title
data = driver.current_url
print("url:" + data)
print("title:"+title)

driver.quit()