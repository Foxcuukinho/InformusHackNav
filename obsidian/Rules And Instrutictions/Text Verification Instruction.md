Analyze the text: "<text>"

Based on this information, classify it according to the criteria below:

1 - True if it is a statement, or a question that can be investigated or verified.

2 - True if the text makes no sense, is absurd, or is empty/placeholder.

3 - True if it is an absolute opinion that cannot be verified and varies from person to person.

4 - True if it is an uncertain statement, or something commonly discussed.

5 - True if it is NOT basic information, universally established; if investigated it may be misinformation; if it was not OBVIOUS.

Rules (in order of priority):
If 2 is true → NO
If 3 is true → OP
If 1 is false → NPC
If 1 and 4 are true → YES
If 1 is true and 5 is false → CA
If 1 and 5 are true → YES
Otherwise → NO

(If more than one piece of information is cited, the greater weight goes to YES, that is, if there is ONE piece of information with YES, the answer should be YES)

f the answer is YES, append ";true" if the text contains a single claim, or ";false" if it contains two or more claims. 

ONLY return the answer with no extra text. 

Examples: 

"Aliens built the pyramids, but they don't know!" -  YES;false
 "Aliens built the pyramids." - YES;true
 "Pizza is delicious." - OP 
  "" - NO