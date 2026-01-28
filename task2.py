class BabyCrying:
    def __init__(self, emotion):
        self.emotion = emotion
        if emotion == "crying":
            self.response = "Hush little baby, don't you cry, mommy's gonna buy you candy tonight."
        elif emotion == "hungry":
            self.response = "Feed the baby."
        elif emotion == "happy":
            self.response = "Play with the baby."
        else:
            self.response = "Baby's asleep, be silent."

    def __str__(self):
        return self.response



emotion = input("Please enter the baby emotion: ")
baby = BabyCrying(emotion)
print(baby)
