import static spark.Spark.*;
import com.google.gson.Gson;

import java.util.HashMap;
import java.util.Map;

public class EventServer {

    public static void main(String[] args) {
        port(4567); // Server runs on http://localhost:4567

        // Allow CORS (so your front-end can talk to backend)
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

        before((request, response) -> {
            response.header("Access-Control-Allow-Origin", "*");
        });

        // Handle /events API
        get("/events", (request, response) -> {
            // Get query parameters
            String location = request.queryParams("location");
            String eventType = request.queryParams("eventType");
            String temperature = request.queryParams("temperature");
            String budget = request.queryParams("budget");

            // Example "matching" logic (you can customize this later)
            Map<String, String> event = new HashMap<>();
            event.put("eventName", "Fun " + eventType + " in " + location);
            event.put("location", location);
            event.put("eventType", eventType);
            event.put("price", budget != null ? budget : "Unknown");
            event.put("date", "2024-06-15");

            response.type("application/json");
            return new Gson().toJson(event);
        });
    }
}
