package cospro2;

    public class q1{
        public static int[] solution(String[] shirtSize){
            int[] result = new int[6];
            //System.out.println(result[0]);

            for(int i=0; i<shirtSize.length; i++){
                if(shirtSize[i] == "XS")
                    result[0]++;
                if(shirtSize[i] == "S")
                    result[1]++;
                if(shirtSize[i] == "M")
                    result[2]++;
                if(shirtSize[i] == "L")
                    result[3]++;
                if(shirtSize[i] == "XL")
                    result[4]++;
                if(shirtSize[i] == "XXL")
                    result[5]++;

            }
            return result;
        }
        public static void main(String[] args){
            int[] solution = solution(new String[]{"XS", "S", "L", "L", "XL", "S"});

            System.out.println(solution[1]);
        }
    }
