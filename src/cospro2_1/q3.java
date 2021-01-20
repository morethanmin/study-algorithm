package cospro2;


public class q3 {

    public static int getTotal(int month,int day){

        int[] monthVal = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
        int result, monthtotal = 0;
        for(int i=0; i<month-1; i++){
            monthtotal += monthVal[i];
        }
        result = monthtotal + day;

        return result;

    }
    public static int solution(int startMonth, int startDay, int endMonth, int endDay){
        int startTotal = getTotal(startMonth,startDay);
        int endTotal = getTotal(endMonth,endDay);
        int result = endTotal - startTotal;

        return result;
    }

    public static void main(String[] args){
        System.out.println(solution(1,2,2,2));
    }
}
