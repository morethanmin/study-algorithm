package cospro2_2;

public class q2 {

    static int getCount(int[] arr, int num){
        int result = 0;
        for (int i: arr) {
            if(i%num==0){
                System.out.print(i+", ");
                result++;
            }
        }
        return result;
    }

    static String solution(int[] arr){
        System.out.println("3의배수");
        int threeCount = getCount(arr,3);
        System.out.println("\n5의배수");
        int fiveCount = getCount(arr,5);
        String result = new String();
        if(threeCount>fiveCount){
            result = "three";
        } else if(threeCount<fiveCount){
            result = "five";
        } else if(threeCount==fiveCount) {
            result = "same";
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println("\n결과 : "+solution(new int[]{2, 3, 6, 9, 12, 15, 10, 20, 22, 25}));
    }
}

