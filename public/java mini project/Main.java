import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.geometry.Pos;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.layout.VBox;
import javafx.stage.Modality;
import javafx.stage.Popup;
import javafx.stage.Stage;

import java.io.IOException;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalDate;
import java.time.ZoneId;
import java.time.ZonedDateTime;

public class Main extends Application {

    @Override
    public void start(Stage primaryStage) throws Exception {

        VBox root = new VBox(10);
        root.setAlignment(Pos.CENTER);
        root.setPadding(new Insets(10));

        Label dateLabel = new Label("Current Date: " + LocalDate.now());
        Label timeLabel = new Label("Current Time: " + LocalDateTime.now());
        Label dayLabel = new Label("Current Day: " + LocalDate.now().getDayOfWeek());

        Button weatherButton = new Button("Show Weather");
        weatherButton.setOnAction(event -> {

            Popup weatherPopup = new Popup();
            weatherPopup.setAutoHide(true);
            weatherPopup.setHideOnEscape(true);

            Label weatherLabel = new Label("Loading weather...");
            weatherPopup.getContent().add(weatherLabel);

            weatherPopup.show(primaryStage);

            HttpClient client = HttpClient.newHttpClient();
            HttpRequest request = HttpRequest.newBuilder()
                    .uri(URI.create("http://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=YOUR_API_KEY"))
                    .build();

            client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
                    .thenApply(HttpResponse::body)
                    .thenAccept(response -> {
                        weatherLabel.setText("Weather: " + response);
                    });
        });

        root.getChildren().addAll(dateLabel, timeLabel, dayLabel, weatherButton);

        Scene scene = new Scene(root, 300, 200);
        primaryStage.setTitle("Live Time, Weather, Date, and Day");
        primaryStage.setScene(scene);
        primaryStage.show();
    }

    public static void main(String[] args) {
        Application.launch(Main.class, args);
    }
}