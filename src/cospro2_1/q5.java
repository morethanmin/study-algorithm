package cospro2;

public class q5 {
    public static int[] solution(int[] arr){
        int result[] = new int[arr.length];
        for(int i=1; i<=arr.length; i++){
            //System.out.println(arr.length-i);
            result[arr.length-i] = arr[i-1];
        }
        return result;
    }
    public static void main(String[] args){
        //System.out.println(new int[]{1,2,3,4});
        for (int i: solution(new int[]{1,2,3,4})
             ) {
            System.out.println(i);
        }
    }
}
