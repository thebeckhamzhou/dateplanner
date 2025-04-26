import static spark.Spark.*;

import java.util.HashMap;
import java.util.Map;

import com.google.gson.Gson;

public class EventServer {
    public static void main(String[] args) {
        port(4567); // Start server on port 4567

        // Enable CORS (to allow frontend to connect)
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }

            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }

            return "OK";
        });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        // Define a route to handle the frontend request
        get("/events", (req, res) -> {
            String location = req.queryParams("location");
            String eventType = req.queryParams("eventType");
            String temperature = req.queryParams("temperature");
            String budget = req.queryParams("budget");

            // Example: Just create a fake event based on input
            Map<String, String> event = new HashMap<>();
            event.put("eventName", eventType + " Extravaganza");
            event.put("location", location);
            event.put("eventType", eventType);
            event.put("price", "50"); // Placeholder price
            event.put("date", "2025-05-01"); // Placeholder date

            res.type("application/json");
            return new Gson().toJson(event);
        });
    }
}
