using System;
using System.Collections.Generic;
using System.Data.Odbc;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace kosci_do_gry
{
    internal class Program
    {
        static int[] Rzuty(int ile)
        {
            Random rnd = new Random();
            int[] kosci = new int[ile];

            for (int i = 0; i < ile; i++)
            {
                kosci[i] = rnd.Next(1, 7);
            }

            return kosci;
        }
        static int Punkty(int[] kosci)
        {
            int punkty=0;
            int[] mozliwosci = {1,2,3,4,5,6};
            int[] powtorzenia = {0,0,0,0,0,0};

            for (int i = 0; i < kosci.Length; i++)
            {
                for (int j = 0; j < mozliwosci.Length;j++)
                {
                    if (kosci[i] == mozliwosci[j])
                    {
                        powtorzenia[j]++;
                        break;
                    }
                }
            }

            for (int i = 0; i < mozliwosci.Length; i++)
            {
                if (powtorzenia[i]>=2)
                {
                    punkty += powtorzenia[i] * mozliwosci[i];
                }
            }

            
            return punkty;
        }
        static void Main(string[] args)
        {
            string odp;
            int ile;

            do
            {
                Console.WriteLine("Podaj ilość kości 3-10");
                ile = int.Parse(Console.ReadLine());
            }
            while (ile < 3 || ile > 10);

            do
            {
                int[] kosci = Rzuty(ile);

                for (int i = 0; i < ile; i++)
                {
                    Console.WriteLine("Kostka " + (i+1) + ": " + kosci[i]);
                }

                int punkty = Punkty(kosci);

                Console.WriteLine($"Wyrzuciłeś {punkty} punktów.");

                Console.WriteLine("Powtórzyć losowanie? (t/n)");
                odp = Console.ReadLine();
            }while (odp=="t");
        }
    }
}
