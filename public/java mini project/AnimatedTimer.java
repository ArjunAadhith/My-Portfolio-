import javafx.animation.FadeTransition;
import javafx.animation.KeyFrame;
import javafx.animation.Timeline;
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.layout.StackPane;
import javafx.scene.paint.Color;
import javafx.scene.text.Font;
import javafx.scene.text.Text;
import javafx.stage.Stage;
import javafx.util.Duration;

public class AnimatedTimer extends Application {

    private int timeRemaining = 10; // Timer starts at 10 seconds

    @Override
    public void start(Stage primaryStage) {
        // Create the Text node for the timer
        Text timerText = new Text(String.valueOf(timeRemaining));
        timerText.setFont(Font.font("Arial", 100));
        timerText.setFill(Color.DARKBLUE);

        // Center the text in the scene
        StackPane root = new StackPane(timerText);
        Scene scene = new Scene(root, 400, 300);

        // Create a timeline to update the timer every second
        Timeline timeline = new Timeline(new KeyFrame(Duration.seconds(1), e -> {
            if (timeRemaining > 0) {
                timeRemaining--;
                timerText.setText(String.valueOf(timeRemaining));
                playFadeAnimation(timerText);
            }
        }));

        // Stop the timer when it reaches zero
        timeline.setCycleCount(timeRemaining);
        timeline.play();

        // Set up the stage
        primaryStage.setTitle("Animated Timer");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    private void playFadeAnimation(Text text) {
        FadeTransition fadeTransition = new FadeTransition(Duration.seconds(0.5), text);
        fadeTransition.setFromValue(1.0);
        fadeTransition.setToValue(0.3);
        fadeTransition.setAutoReverse(true);
        fadeTransition.play();
    }

    public static void main(String[] args) {
        launch(args);
    }
}
