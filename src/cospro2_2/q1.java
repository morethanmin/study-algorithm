package cospro2_2;

public class q1 {

    static int[] getCount(int[] target){
        int result[] = new int[11];
        for(int i=0; i< target.length; i++){
            result[target[i]]++;
        }

        return result;
    }

    static int solution(int[] leftGloves, int[] rightGloves){
        int leftCount[] = new int[11];
        int rightCount[] = new int[11];
        int result = 0;
        leftCount = getCount(leftGloves);
        rightCount = getCount(rightGloves);
        for(int i=1; i<11; i++){
            if(leftCount[i]>0 && rightCount[i]>0){
                System.out.println(i+"번 장갑");
                if ((leftCount[i] <= rightCount[i])) {
                    result += leftCount[i];
                    System.out.println(leftCount[i]+"개");
                } else {
                    result += rightCount[i];
                    System.out.println(rightCount[i]+"개");
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(solution(new int[]{2,1,2,2,4},new int[]{1,2,2,4,4,7}));
    }
}
