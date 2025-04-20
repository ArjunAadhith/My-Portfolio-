import java.util.Random;
import java.util.Scanner;

public class RockPaperScissors {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Random random = new Random();

        System.out.println("Welcome to Rock, Paper, Scissors!");

        while (true) {
            System.out.println("Enter your choice (rock/paper/scissors) or 'quit' to exit:");
            String userChoice = scanner.nextLine().toLowerCase();

            if (userChoice.equals("quit")) {
                break;
            }

            if (!userChoice.equals("rock") && !userChoice.equals("paper") && !userChoice.equals("scissors")) {
                System.out.println("Invalid choice. Please enter rock, paper, or scissors.");
                continue;
            }

            String computerChoice = getComputerChoice(random);
            System.out.println("Computer chose: " + computerChoice);

            String winner = determineWinner(userChoice, computerChoice);
            System.out.println(winner);
        }

        scanner.close();
    }

    private static String getComputerChoice(Random random) {
        String[] choices = {"rock", "paper", "scissors"};
        return choices[random.nextInt(choices.length)];
    }

    private static String determineWinner(String userChoice, String computerChoice) {
        if (userChoice.equals(computerChoice)) {
            return "It's a tie!";
        }

        switch (userChoice) {
            case "rock":
                return computerChoice.equals("scissors") ? "Rock crushes scissors, you win!" : "Paper covers rock, you lose!";
            case "paper":
                return computerChoice.equals("rock") ? "Paper covers rock, you win!" : "Scissors cuts paper, you lose!";
            case "scissors":
                return computerChoice.equals("paper") ? "Scissors cuts paper, you win!" : "Rock crushes scissors, you lose!";
            default:
                return "Invalid choice"; // This should never happen
        }
    }
}