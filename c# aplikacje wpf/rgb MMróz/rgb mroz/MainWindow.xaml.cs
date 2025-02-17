using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows;
using System.Windows.Controls;
using System.Windows.Data;
using System.Windows.Documents;
using System.Windows.Input;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using System.Windows.Navigation;
using System.Windows.Shapes;

namespace rgb_mroz
{
    /// <summary>
    /// Logika interakcji dla klasy MainWindow.xaml
    /// </summary>
    public partial class MainWindow : Window
    {
        public MainWindow()
        {
            InitializeComponent();
        }

        private void kolor_clicked(object sender, RoutedEventArgs e)
        {
            //double tR = wartoscR.Value;
            //string R = tR.ToString();
            //double tG = wartoscR.Value;
            //string G = tG.ToString();
            //double tB = wartoscR.Value;
            //string B = tB.ToString();

            byte byteR = (byte)Math.Round(wartoscR.Value);
            byte byteG = (byte)Math.Round(wartoscG.Value);
            byte byteB = (byte)Math.Round(wartoscB.Value);

            kolor.Background = new SolidColorBrush(Color.FromRgb(byteR, byteG, byteB));
        }
    }
}
