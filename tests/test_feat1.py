'''
feature 1 - list all games:

to pass this test the frontend must show at least 10
games with thumbnail, platform and os with valid values
(not null)
'''


from selenium import webdriver
from selenium.webdriver.common.by import By
import time
import pytest



def test1():
    driver = webdriver.Chrome()
    driver.get("http://localhost:4200/")
    gameButtons=[]
    time.sleep(5)
    gameButtons = driver.find_elements(By.CLASS_NAME, "gameButton")
    print(len(gameButtons))
    assert len(gameButtons) > 10

    for gameButton in gameButtons[:10]:
        title = gameButton.find_element(By.CLASS_NAME, "gameTitle").text
        platform = gameButton.find_element(By.CLASS_NAME,"gamePlatform").text
        img = gameButton.find_element(By.CLASS_NAME,"gameImg").get_attribute("src")
        
        assert title !=None
        assert len(title) > 0
        
        assert platform !=None
        assert len(platform) > 0
        
        assert title !=None
        assert len(title) > 0
        pass


    driver.quit()