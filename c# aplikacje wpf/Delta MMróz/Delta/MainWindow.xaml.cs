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

namespace Delta
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

        private void solve_clicked(object sender, RoutedEventArgs e)
        {
            double a = sliderA.Value;
            double b = sliderB.Value;
            double c = sliderC.Value;

            double delta = Math.Round(b) - 4 * a * c;
            int ile_miejsc_zerowych;
            double delta_pierw = Math.Sqrt(delta);


            if (delta > 0)
            {
                ile_miejsc_zerowych = 2;
                double miejsce_zerowe_1 = (-b-delta_pierw)/(2*a);
            }
            else if (delta == 0)
            {
                ile_miejsc_zerowych = 1;

            }
            else if (delta < 0)
            {
                ile_miejsc_zerowych = 0;

            }



        }
    }
}
