#include <iostream>

using namespace std;

class Book{
	public:
		string tytul;
		string autor;
		int rok;
	public:
		Book(string t, string a, int r): tytul(t), autor(a),rok(r){}
	
		virtual void showInfo(){
			cout<<"Tytul to: "<< tytul << endl;
			cout<<"Autor to: "<< autor << endl;
			cout<<"Rok wydania to: "<< rok << endl;
		}
		
		virtual void wypozycz(){
			cout<<"Wypozyczono:"<<endl;
			cout<< tytul << " autorstwa " << autor << " z roku " << rok << endl;
		}
};

class Ebook : public Book{
	public:
		float rozmiarPliku;
		string formatPliku;
	public:
		Ebook(string t, string a, int r,float rP,string fP): Book(t,a,r), rozmiarPliku(rP), formatPliku(fP){}
		
		virtual void showInfo(){
			Book :: showInfo();
			cout<<"Rozmiar pliku to: "<< rozmiarPliku << " mb" << endl;
			cout<<"Format pliku to: "<< formatPliku << endl;
			cout<< endl;
		}
		virtual void wypozycz(){
			Book::wypozycz();
			cout<<"Ebook dostepny w zakladce 'Twoja Polka'. Milego czytania!" << endl;
			cout<< endl;
		}
};

enum Okladka{
	miekka,
	twarda,
	elastyczna
};

class PrintedBook : public Book{
	public:
		int liczbaStron;
		Okladka okladka;
	public:
		PrintedBook(string t, string a, int r,int lS,Okladka ok): Book(t,a,r), liczbaStron(lS), okladka(ok){}
		
		virtual void showInfo(){
			Book :: showInfo();
			cout<< "Liczba stron to: "<< liczbaStron << endl;
			if(okladka==0){
				cout<< "Okladka to: miekka" << endl;
			}
			else if(okladka==1){
				cout<< "Okladka to: twarda" << endl;
			}
			else if(okladka==2){
				cout<< "Okladka to: elastyczna" << endl;
			}
			
			cout<< endl;
		}
		virtual void wypozycz(){
			Book::wypozycz();
			cout<<"Ksiazka zostala wypozyczona. Milego czytania! Nalezy odniesc do biblioteki w uzgodnionym terminie!" << endl;
			cout<< endl;
		}
};

class Audiobook : public Book{
	public:
		int czasTrwania;
		string narrator;
	public:
		Audiobook(string t, string a, int r,int cT,string narr): Book(t,a,r), czasTrwania(cT), narrator(narr){}
		
		virtual void showInfo(){
			Book :: showInfo();
			cout<< "Czas trwania to: "<< czasTrwania << " h" << endl;
			cout<< "Narrator to: "<< narrator << endl;
			cout<< endl;
		}
		virtual void wypozycz(){
			Book::wypozycz();
			cout<<"Audiobook dostepny w zakladce 'Twoje Audiobooki'. Udanego sluchania!" << endl;
			cout<< endl;
		}
};



int main(){
	Book *wsk[100];
	Ebook Ebook1("Hobbit","J.R.R.",2001,200.5,".ebk");
	PrintedBook printedBook1("Batman","John",2005,530,elastyczna);
	Audiobook audiobook1("Co piszczy w trawie?","Diglet Moron",2015,2,"Jerzy Sztur");
	
	wsk[0] = &Ebook1;
	wsk[1] = &printedBook1;
	wsk[2] = &audiobook1;

	for(int a=0;a<3;a++){
		wsk[a] -> showInfo();
	}
	
	cout<< endl;
	
	for(int a=0;a<3;a++){
		wsk[a] -> wypozycz();
	}	
	
	

	
	
	return 0;
}
