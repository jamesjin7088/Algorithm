package entryTest;

public class CountOfDice {
    public static void main(String[] args) {

        // 박스의 크기
        int[] box = {10,8,6};

        // 주사위의 크기
        int n = 3;

        // 상자에 들어갈 수 있는 주사위의 최대 개수
        int max = (int) (box[0] / n) * (box[1] / n) * (box[2] / n);

        System.out.println(max);




    }
}
