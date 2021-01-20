package cospro2;


public class q4 {
    public static int solution(int[] arr){
        int count[] = new int[1001];
        //자연수의 개수 넣기
        //System.out.println(count[0]);
        for(int i=0; i<arr.length; i++){
            count[arr[i]]++;
        }
        int max=0,min=1001;
        for(int i=0; i< count.length; i++){
            if(count[i]>max) {
                //System.out.println(count[i]);
                max = count[i];
            }
        }
        for(int i=0; i< count.length; i++){
            if(count[i]!=0 && count[i]<min) {
                min = count[i];
                //System.out.p
                // rintln(min);
            }
        }
        //System.out.println(max);
        //System.out.println(min);
        int result = max/min;
        return result;
    }
    public static void main(String[] args){
        System.out.println(solution(new int[]{1,2,3,3,1,3,3,2,3,2}));
    }
}
