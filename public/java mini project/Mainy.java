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

public class Mainy {
    public static void main(String[] args) throws IOException, InterruptedException {
        // Get current date and time
        LocalDateTime currentTime = LocalDateTime.now();
        System.out.println("Current Time: " + currentTime);

        ZonedDateTime currentTimeInZone = ZonedDateTime.now(ZoneId.of("Asia/Kolkata"));
        System.out.println("Current Time in Asia/Kolkata: " + currentTimeInZone);

        // Get current date and day
        LocalDate currentDate = LocalDate.now();
        System.out.println("Current Date: " + currentDate);

        DayOfWeek currentDay = currentDate.getDayOfWeek();
        System.out.println("Current Day: " + currentDay);

        // Get weather data from OpenWeatherMap API
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("http://api.openweathermap.org/data/2.5/weather?q=London,UK&appid=YOUR_API_KEY"))
                .build();

        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());
        System.out.println("Weather Response: " + response.body());
    }
}
