#include<conio.h>
#include<stdio.h>
void main()
{
    int n,num,i,on,tw,th,fo,fi,j;
    int into[5]={1,1,1,1,1};
    printf("Enter binary number here:\n");
    scanf("%d",&n);
    on=n%10;
    tw=(n%100)/10;
    th=(n%1000)/100;
    fo=(n%10000)/1000;
    fi=n/10000;
    for(i=1;i<5;i++)
    {
        for(j=0;j<i;j++)
        {
            into[i]*=2;
        }
    }
    num=into[0]*on+into[1]*tw+into[2]*th+into[3]*fo+into[4]*fi;
    printf("decimal number is %d",num);
}