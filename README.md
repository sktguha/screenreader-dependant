<pre>
a simple extension for chrome to read websites aloud without any user interface
see the video tutorial(<a href='http://youtu.be/gmfv3QHrwfM'>http://youtu.be/gmfv3QHrwfM</a>) or a simple description below
----------KEYMAP-----------
(video tutorial <a href='http://youtu.be/Qfz-UAqSjRc'>http://youtu.be/Qfz-UAqSjRc</a>)
usage is very simple. select any text and press 
, key .The text selection moves to next line and 'reads it'(i.e upto next full stop)
aloud i.e u will hear the sound from the speakers
similiarly 'm' key goes to previous line and reads it.(i.e upto previous full stop)
' to go upto next punctuation mark
; to go upto previous punctuation mark
 + key to increase speech rate
 - key to decrease speech rate
 ----------HOW IT WORKS------
 the extension works as a client server model. an injected javascript sends the selected text to a 
 (windows)application 
running a server with localhost://60024 using a GET request and hence the server processes it i.e 
converts into speech. 
</pre>
