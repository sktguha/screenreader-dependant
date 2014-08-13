   //this is the old one please don't use it
   
   var sr=0;
   function subs(inp) 
{           
            var subl=new Array(
"=>: implies ",
"+:  plus ",	//1
"<:  less than ",	//2
">:  greater than ",	//3
 "ii: I I",	//4
 "GUI: G U I",	//5
 "Key:kee",	//6
 "toString:too string",	//7
 "\u0398:theeta",	//8
 "n2:n square",	//9
 "log*:log ",	//10
 "\u03b1:alpha",	//11
 "SQLiteDatabase:S Q L lite database"	//12
 ,"a:a"	//13
 ,"href: H ref"	//14
 ,"JavaScript: jaava script "	//15
,"\u2190:equal "	//16
,"\u222a:union"	//17
,"!:!"	//18
,"\u03bb:lambda "	//19
//,"ch : c h "	//20
,"ln : log "	//21
,"\u2126: omega "	//22
," lg: log"	//23
,"\u2229: disjunction "	//24
,"\u03c3: sigma "	//25
,"\u2265: greater or equal to "	//26
,"\u2264: less or equal to "	//27
,"\u2286: subset of "	//28
,"\u2208: belongs to "	//29
,"\u2260: not equal to "   	//30
,".: dot "                                  //31	
,"-:-"                               //32	
//,"Y: y "                                        
,"/:/"//divided by "                       //33	
,"*: into "	//34
,"_:  "	//35
,"i.e: that is " //37
,"//: "	//38
," neural :niur1l"
," div : d i v "
,"C#: c sharp "
,"!=:not equal to"
,"SQL: S Q L"
);
    
var blist=new Array(90);           
            //var sl = subs.split("##");
            //alert(subl[32]);
            for (var i = 0; i < subl.length; i++) {
                try {
                    
                    if(blindex==1)
                        { 
                           var brf=0;
                           for(var j=0;j<blist.length;j++)
                           { 
                            if(blist[j]==i)
                            brf=1;  
                            }
                        if(brf==1) { //alert("i= "+i); 
                            {  //alert(" breaking at index "+i+" string is "+subl[i]); 
                                continue;}
                        }
                        } 
                    var olds = subl[i].split(":")[0];
                    var news = subl[i].split(":")[1];
                   // alert("olds =" + olds + " news=" + news);
                    inp = inp.split(olds).join(news);
                   //throw new exception("he he he");
                   //alert(inp);
            } catch (err) {
               //    alert(err);
                   // Logger.getLogger(screenreaderfinal.class.getName()).log(Level.SEVERE, null, ex);
                }
            }
            //alert("here");
            return inp;
        }

   
   function invertcolor(){
    var css='html {-webkit-filter: invert(100%);'+'-moz-filter: invert(100%);'+'-o-filter: invert(100%);'+'-ms-filter: invert(100%); }',
    head=document.getElementsByTagName('head')[0],
    style=document.createElement('style');
    if(!window.counter){window.counter=1;}
    else{window.counter++;
        if(window.counter%2==0)
        {var css='html {-webkit-filter: invert(0%); -moz-filter: invert(0%); -o-filter: invert(0%); -ms-filter: invert(0%); }'}};
    style.type='text/css';
    if(style.styleSheet)
    {style.styleSheet.cssText=css;}
    else{style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
    
}

function howstuffworksprintable()
{
var hst=window.location.hostname;
if(hst.indexOf("howstuffworks.com")!=-1)
window.location.href=window.location.origin+window.location.pathname+"/printable";
} 
//howstuffworksprintable();
var adr=window.location.href.toString();
//if(0)//adr.indexOf("file:///",0)==-1)
//{
//    dg("exit point")
//    throw new Error("not an error. simply to stop the javascript");
//    void 0;
//}


  //ads("http://localhost:8080/WebApplication2/browserspeak.js?timestamp="+new Date().getTime());
if(adr.indexOf("file",0)!=-1)
;//invertcolor();
function speak(text)
{
    //new String(;
    dg("speaktext is called")
    
       speaktext(text+"#####"+sr);
}
var css=document.createElement("css");
//function alert(arg){ console.log("alert has been deactivated"); }
//var ran=new Range();
//ran.selectNode(document.getElementsByTagName("body")[0]);
var el=document.getElementsByTagName("*")[0];
var ran = document.createRange(); 
//ran.selectNodeContents(el);
var div=document.createElement("div");
if(1==0)
    {
ran.setStart(el, 1);
ran.setEnd(el, 1);
var sel = window.getSelection(); 
sel.removeAllRanges(); 
sel.addRange(ran); 
mfsl();
    }
//alert(window.getSelection());
 if(document.URL.toString().indexOf("Algorithms", 0)!=-1)
     ;//document.body.style.zoom=1.4;
 if(document.URL.toString().indexOf("mmapi", 0)!=-1)
     {document.body.style.zoom=1.4;  }// document.title="777screenreaderactive MMAPI";}
 //default zoom
// document.body.style.zoom=1.4;
//invertcolor();=
window.onblur=function(){speak(" ");}; 
window.onclose=function(){speak(" ");}; 
 window.onunload=function(){speak(" ");}
 //window.addEventListener('unload', function() { speak(" ")});
 document.onkeypress=handler;
 //unset document as editable. for after commenting
 document.body.contentEditable='false'; document.designMode='off';
 document.spellcheck="false";
 document.onkeypress=handler;
//window.removeEventListener("keypress", handler, true);
//window.addEventListener("keypress", handler,true);
var mxl=280;
var mnl=30;
var inf=900; /*infinite loop control */
var rf=1; /*repeat flag*/
/**
 *fraction of window viewport to scroll
 */
var scf=0.45; //fraction of window viewport to scroll
var cef=0;
var blindex=1; //black list index

function ads( src ) {  var s = document.createElement( 'script' );  s.setAttribute( 'src', src );  document.body.appendChild( s );}
function pt(text)
{
  console.debug(text);  
    
}
        /**
         *the speech rate. it varies from -10 to 10
         **/

function handler(event)
{
var ns=47,ps=46,nl=39,pl=59,rep=32,cef=78;
var pss=109,nss=44,ss=13; //next system sentence and previous system sentence   
var blist=108,invertcol=105; //invert colors
var su=61,sd=45;
var kc=(event.keyCode) ? event.keyCode : event.which;
if(kc==invertcol)
    {
    //alert("called"); 
    invertcolor();
    return false;
     }
if(kc==su)
    {
        sr= sr<10?sr+1:10;
        console.debug("speech rate is "+sr);
        return true;
    }
if(kc==sd)
    {
        sr= sr>-10?sr-1:-10;
        console.debug("speech rate is "+sr);
        return true;
    }

if (document.documentElement.contentEditable === true || document.designMode === "on" && kc!=cef) 
    {
    return false;
    }

//alert(kc);
var url=document.URL.toString();
if(kc==91)
    {
    if(url.indexOf("LiB")!=-1)
        {
            var adr=document.getElementsByTagName("a")[1].href;
            window.location.href=adr;
        }
        return false;
    }
if(kc==93)
    {
    if(url.indexOf("LiB")!=-1)
        {
            adr=document.getElementsByTagName("a")[2].href;
            window.location.href=adr;
        }
        return false;
    }
    
    if(kc==blist)
        {
          if(blindex==0){ blindex=1; /*alert("on");*/}
          else                     { blindex=0; /*alert("off");*/}
       //return false;    
       }
    if(kc==cef) //toggle content editabillity
    {
      (
      function () {    if (document.documentElement.contentEditable === false || document.designMode === "off") {        document.body.contentEditable='true';        document.designMode='on';        void 0;    } else if (document.documentElement.contentEditable === true || document.designMode === "on") {        document.body.contentEditable='false';        document.designMode='off';        void 0;    }})();       
    }
    
else if(kc==pss)    // . for prev sentence
{ 
    //alert("called p");
    mbss(); 
  //mbl();
}
else if(kc==nss) // / for next sentence 
{   //alert("called n");
    mfss(); 
    //mfl();
}

else if(kc==ps)    // . for prev sentence
{ //mbss(); 
  mbl();
}

else if(kc==ns) // / for next sentence 
{ 
    //mfss(); 
    mfl();
}

else if(kc==32)  // space for repeat
     {
        mvis();
       //alert("called");
       var sel=window.getSelection().toString();
        sel=sel.trim();
       if(sel.charAt(sel.length-1)=='.') 
           sel=sel.substring(0,sel.length-1);
       var txt=subs(sel);
       speak(txt);
       
       return false;
}
else if(kc==pl) //; for prev line
    {
        mbsl();
        
        //mbb(30);
        //mbc('\n', 5, mxl)
    }
else if(kc==nl) // ' for next line
    {
        mfsl();
        //mfb(30);
        //mfc('\n', 5, mxl)
    }
else if(kc==ss)
    {
    speak(" ");  
    }


if(true)//kc==ps||kc==ns||kc==pl||kc==nl||kc==rep||kc==pss||kc==nss||kc==ss) //nl and pl have been modified for next and previous blocks
    {
        
        //make selection visible
        mvis();
       //alert("called");
       var sel=window.getSelection().toString();
       sel=sel.trim();
       if(sel.charAt(sel.length-1)=='.') 
           sel=sel.substring(0,sel.length-1);
       var txt=subs(sel);
       speak(txt);
       return false;
}
//alert("got here");
//return false;
}
/**
 *holds the reploacement strings seperated by ####
 **/
var replist="";

function dg(txt)
{
    console.debug(txt);  
}
function preprocess(txt)
{
    if(replist.length<1)
        return txt;
    var arr=replist.split("####");
    var lasti=-999;
    for(i=0;i<arr.length;i++)
        {
            if(arr[i].length<1)
                continue;
            if( arr[i].charAt(arr[i].length-1)=='-' )
                continue;
           console.debug(arr[i]);
           if(i+1<arr.length)
               arr[i+1]=arr[i+1].replace(arr[i],arr[i]+" ");
           txt=txt.replace(arr[i],arr[i]+" "); 
           lasti=i;
           dg(" text ->"+txt);
    }
    if(lasti>=0)
    txt=txt.replace(arr[lasti],arr[lasti]+" "); 
dg(" final text ->"+txt);
//replist="";
return txt;
}

function send(txt)
{
    var res=new String();
    for(var i=0;i<txt.length;i++)
        {
        res+=" "+txt.charCodeAt(i);    
        }
        alert("len is "+txt.length+" txt:"+res);    
     
 }   

/**
 *move forward by using system functions by one sentence
 */
function mfss()
{
var sel = window.getSelection(); 
sel.modify("move","forward","character");
sel.modify("extend","forward","sentence");
    
sel = window.getSelection(); 
if(sel.toString().length<mnl)
    mfss();
}
/**
 * move backward by using system functions by one sentence
 */
function mbss()
{
var sel = window.getSelection(); 
sel.modify("move","backward","character");
sel.modify("extend","backward","sentence");

sel=window.getSelection();
if(sel.toString().length<mnl)
    mbss();
    
}

/**
 * move forward by using system functions by one line
 */

function mfsl()
{
var sel = window.getSelection(); 
sel.modify("move","forward","character");
sel.modify("extend","forward","line");
    
sel = window.getSelection(); 
if(sel.toString().length<mnl)
    mfss();
}
/**
 * move backward by using system functions by one line
 */
function mbsl()
{
var sel = window.getSelection(); 
sel.modify("move","backward","character");
sel.modify("extend","backward","line");

sel=window.getSelection();
if(sel.toString().length<mnl)
    mbss();
    
}
/**
 * gets height of the selected area
 **/
function geth()
{
    var sel=window.getSelection();
    var rc=sel.getRangeAt(0).getBoundingClientRect();
    return rc.height;
}
/**
 * move forward by line
 * 
 */

function mfl()
{
var selection = window.getSelection(); 
selection.modify("move","forward","character");
var ct=0;
replist="";
while(true)
    {
         ct++;
         if(ct>=inf)
            { 
                break; /*end of document */
            }
                var h1=geth();
                ecf();
                var h2=geth();
                if(h2>h1 && h1!=0)
                {
               // console.clear();
                console.debug("height difference h1="+h1+" h2 = "+h2);
                var str=window.getSelection().toString();
                str=str.trim();
                replist+="####"+str;
                
               // console.debug("\ntext to replace is ->"+txt+"<-");
                console.debug("list so far is ->"+replist+"<-");
                
                }
         var txt=window.getSelection().toString();
        var ch=txt.charAt(txt.length-1);
          if(txt.length>mxl)
           { break; }
      
        if(ch=="\n" && txt.length>mnl)
            {//alert("break on newline"); break;}
            break;
            }
        if(ch=='.')
            {   /*extend and see if the next char is space(next sentence then) */ 
                 //alert("dot detected");
                 var h1=geth();
                 ecf();
                 var h2=geth();
                 if(txt.length<mnl)
                     continue;
                 if(h2>h1 && h1!=0)
                 break;
                 var txt=window.getSelection().toString();
                 var prevch=txt.charAt(txt.length-1);
                 
                 if(prevch==" " || txt.charCodeAt(txt.length-1)==10)
                  {  
                    break;
                  }
                  else
                     { continue; }
         }
    }
}
function ecf()
{
   
   var sel=window.getSelection();
    sel.modify("extend","forward","character");
}
function ecb()
{   var sel=window.getSelection();
    sel.modify("extend","backward","character");
}

/**move back block
 * function to simply traverse large blocks
 */
function mbb(lim)
{
 var selection=window.getSelection();
 //selection.modify("move","backward","character");
 
 //ecf();
 //mfb(lim);
 for(var i=0;i<lim;i++)
     {
         selection.modify("move","backward","line");
         //selection.modify("move","backward","sentence");
         //selection.modify("extend","backward","word");    
     }
mfb(lim); 
}

/**move forward block
 * function to simply traverse large blocks
 */
function mfb(lim)
{
 var selection=window.getSelection();
 selection.modify("move","forward","character");
 //selection.modify("extend","forward","sentence");
 for(var i=0;i<lim;i++)
     {
    //     ecf();
 selection.modify("extend","forward","sentence");    
 }
    
}



function mbl()
{
var selection = window.getSelection(); 
selection.modify("move","backward","character");
var ct=0;
while(true)
    {
         ct++;
         if(ct>=inf)
            { 
                
                break; /*end of document */
            }
         
        ecb();
        var txt=window.getSelection().toString();
        var ch=txt.charAt(0);
        if(txt.length>mxl)
            break;
        
        if(ch=="\n" && txt.length>mnl)
            break;
        
        if(ch=='.')
           { 
                  /*ecb(); //no need for it */
                 if(txt.length<mnl)
                     continue;
                 
                 var txt=window.getSelection().toString();
                 var ch=txt.charAt(1);
                 if(ch==" " || txt.charCodeAt(1)==10)
                  {  
                    break;
                  }
                  else
                     { continue; }
 
          break;
       }
    }
}

/**
 *delim-char,min-length,max-length
 *move backward upto character specified
 */
function mbc(ch,min,max)
{
    
 var selection = window.getSelection(); 
selection.modify("move","backward","character");
var ct=0;
while(true)
    {
         ct++;
         if(ct>=inf)
            { 
                
                break; /*end of document */
            }
         
        ecb();
        var txt=window.getSelection().toString();
        var fch=txt.charAt(0);
        if(txt.length>max)
            break;
        if(fch==ch && txt.length>min)
           { 
               
          break;
       }
    }
}
/** 
 *delim-char,min-length,max-length
 *move forward upto character specified
 */
function mfc(ch,min,max)
{

 var selection = window.getSelection(); 
selection.modify("move","forward","character");
var ct=0;
while(true)
    {
         ct++;
         if(ct>=inf)
            { 
                
                break; /*end of document */
            }
         
        ecf();
        var txt=window.getSelection().toString();
        var fch=txt.charAt(txt.length-1);
        if(txt.length>max)
            break;
        
        if(fch==ch && txt.length >min)
           { 

          break;
       }
    }
}   

/**
 * make the current selection visible
 */
function mvis()  
{
        
            var ele=window.getSelection().getRangeAt(0);        
            var sel = ele.getBoundingClientRect();               
            var dw  = document.documentElement.clientWidth;     
            var dh = document.documentElement.clientHeight;       
            dw=window.innerWidth;
            dh=window.innerHeight;
            var st=sel.top;
            var sb=sel.bottom;
            var db=dh; 
            var dt=0;
            var amt=0;
            if(st<0)     //too much up
                {
                    //alert("st<0");
                   amt=-1*dh*scf;//341 dh*scf; 
                }
                if(sb>db) //too much down
                    {
                    //alert("sb>db");
                    amt=dh*scf; //341;    
                    }
                    window.scrollBy(0, amt);
                    if(amt>500) 
                        console.debug("scroll value too much "+amt);
                    //alert(sel.top+" " +sel.right+" "+sel.bottom+" "+ sel.left+"\n"+dw+" "+dh+" amt= "+amt);        
            //simply scroll down or up a constant number
            //amt<0?amt=-1*dh*scf:amt=dh*scf;
            //alert("document top and bottom "+dt+" "+db+"\n"+"selecton top and bottom "+st+" "+sb+"\n"+"amount "+amt);
            //alert(sel.top+" "+sel.bottom);
            /* if(amt>0)
            {
                for(var i=0;i<amt;i++)
                {
                    setTimeout(function(){},300);
                    window.scrollBy(0, 1);
                }
            }
            else
            {   amt=-1*amt; //make amt posititve
                 for(i=0;i<amt;i++)
                {
                    setTimeout(function(){},300);
                    window.scrollBy(0, -1);
                }   
            } */
            
//            console.log(sel.top+" "+sel.bottom);
}



