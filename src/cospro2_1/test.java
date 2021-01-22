package cospro2_1;

public class test
{
    public static String solution(String characters){
        String result = "";
        result += characters.charAt(0);
        for (int i = 1; i < characters.length(); i++) {
            if (characters.charAt(i - 1) != characters.charAt(i))
                result += characters.charAt(i);
        }
        return result;
    }

    // The following is main method to output testcase. The main method is correct and you shall correct solution method.
    public static void main(String[] args) {
        //Solution sol = new Solution();
        String characters = "senteeeencccccceeee";
        String ret = solution(characters);

        // Press Run button to receive output.
        System.out.println("Solution: return value of the method is " + ret + " .");
    }
}
