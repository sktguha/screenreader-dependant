using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;

using System.Windows.Forms;

namespace Screenreader
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            lib.st = 0;
            lib.main();
            String[] tm = { "ms","seconds","minutes","hours"};
            comboBox1.Items.AddRange(tm);
            comboBox1.SelectedItem = "ms";
            Icon icon1 = new Icon(SystemIcons.Information, 40, 40);
            //help.BackgroundImage = icon1.ToBitmap();
        }

        private void Form1_Load(object sender, EventArgs e)
        {

        }
        private void button1_Click(object sender, EventArgs e)
        {

            int val = int.Parse(delay.Text);
            TimeSpan span=TimeSpan.FromSeconds(1);
            String sp = (String) comboBox1.SelectedItem;
            if (sp.Equals("ms"))
            {
                span = TimeSpan.FromMilliseconds(val);
            }
            if (sp.Equals("seconds"))
            {
                span = TimeSpan.FromSeconds(val);
            }
            if (sp.Equals("hours"))
            {
                span = TimeSpan.FromHours(val);
            }
            if (sp.Equals("minutes"))
            {
                span = TimeSpan.FromMinutes(val) ;
            }
            lib.st = 1;
            lib.text = textBox1.Text;
            lib.tm = span;
            start.Enabled = false;   
        }

        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void richTextBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox1_TextChanged(object sender, EventArgs e)
        {

        }

        private void textBox2_TextChanged(object sender, EventArgs e)
        {

        }

        private void comboBox1_SelectedIndexChanged(object sender, EventArgs e)
        {

        }

        private void button2_Click(object sender, EventArgs e)
        {
            lib.st = 0;
            start.Enabled = true;
        }

        private void button3_Click(object sender, EventArgs e)
        {
            MessageBox.Show("Simple program to create keypresses indefinitely. Note that ^,!,+ characters have special meaning.For more info click the help button. \nCreated by saikat guha. facebook profile https://www.facebook.com/saikat.guha.71", "About keypresser");
        }

        private void button4_Click(object sender, EventArgs e)
        {
            System.Diagnostics.Process.Start("http://sktguha.blogspot.in/2014/01/keypresser-is-simple-program-for.html");
        }
    }
}
