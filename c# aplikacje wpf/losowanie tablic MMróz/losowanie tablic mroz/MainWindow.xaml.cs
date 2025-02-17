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

namespace losowanie_tablic_mroz
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

        int[] tablica1 = new int[1];
        int[] tablica2 = new int[1];
        int[] tablicawyn = new int[1];

        private void losuj_clicked(object sender, RoutedEventArgs e)
        {
            Array.Clear(tablica1, 0, tablica1.Length);
            Array.Clear(tablica2, 0, tablica2.Length);
            Random rnd = new Random();
            int ile = int.Parse(zakres.Text);

            tablica1 = new int[ile];
            tablica2 = new int[ile];

            tab1.Text = "";
            tab2.Text = "";
            tabwynik.Text = "";

            if (ile<1 || ile>20)
            {
                blad.Content = "Bład. Liczba musi być z zakresu 1-20";
                return;
            }
            blad.Content = "";
                for (int i = 0; i < ile; i++)
                {
                tablica1[i] = rnd.Next(0, 51);
                tablica2[i] = rnd.Next(0, 51);

                    tab1.Text += tablica1[i] + "\n";
                    tab2.Text += tablica2[i] + "\n";
                }
        }

        private void dodaj_clicked(object sender, RoutedEventArgs e)
        {
            Array.Clear(tablicawyn, 0, tablicawyn.Length);
            int ile = int.Parse(zakres.Text);

            tablicawyn = new int[ile];

            tabwynik.Text = "";

            for (int i = 0; i < ile; i++)
            {
                tablicawyn[i] = tablica1[i] + tablica2[i];

                tabwynik.Text += tablicawyn[i] + "\n";
            }
        }

        private void odejmij_clicked(object sender, RoutedEventArgs e)
        {
            Array.Clear(tablicawyn, 0, tablicawyn.Length);
            int ile = int.Parse(zakres.Text);

            tablicawyn = new int[ile];

            tabwynik.Text = "";

            for (int i = 0; i < ile; i++)
            {
                tablicawyn[i] = tablica1[i] - tablica2[i];

                tabwynik.Text += tablicawyn[i] + "\n";
            }
        }
    }
}
