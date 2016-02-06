"""
Taxes and tip calculator

Author:Sravanthi sinha
Date:03-02-2016
"""

print 'Welcome to the taxes and tip calculator!'

#input variables
meal_price = float(raw_input("What is the price before tax?"))
tax = float(raw_input("What are the taxes? (in %)"))
tip = float(raw_input("What do you want to tip? (in %) "))

#computing the  meal price with tax included
meal_price=meal_price+meal_price*tax*0.01

#computing the tip needed to be paid which is  n percentage of the mealy
tip=meal_price*tip*0.01



#calculating meal_price with tip and tax included
total=meal_price+tip

print 'The price you need to pay is: %f.'%(total)
