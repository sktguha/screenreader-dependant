using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

using System.Windows.Forms;
using System.Threading;
namespace Screenreader
{
    class lib
    {
        public static int st = 0;
        public static String text;
        public static TimeSpan tm;
        public static void main()
        {

            new Thread(() =>
            {
                Thread.CurrentThread.IsBackground = true;
                while (true)
                {
                    if (st == 1)
                    {
                        SendKeys.Flush();
                        SendKeys.SendWait(text);
                        Console.WriteLine("to send ->"+text+" delay="+tm.ToString());
                        //System.Diagnostics.Debug.WriteLine("to send ->" + text);
                        System.Threading.Thread.Sleep(tm);
                    }
                }
    
            }).Start();
            
                        }

    }
}
