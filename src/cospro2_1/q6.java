package cospro2;

public class q6 {
    static boolean check(int n){
        boolean result;
        switch (n){
            case 3: case 6: case 9:
                result = true;
                break;
            default:
                result = false;
                break;
        }
        return result;
    }
    static int solution(int n){
        int result = 0;
        for(int i=1; i<=n; i++){
            String numS = Integer.toString(i);
            for(int a=0; a<numS.length(); a++){
                int numI = Character.getNumericValue(numS.charAt(a));
                if(check(numI))
                    System.out.println(i);
                    //result++;
            }
        }

        return result;
    }

    public static void main(String args[]){
        System.out.println(solution(40));
    }
}
