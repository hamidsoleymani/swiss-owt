package org.boostmedia.swissowtbackend.boat;

import java.time.LocalDateTime;

public record BoatResponse(
        Long id,
        String name,
        String description,
        LocalDateTime createdAt
) {
}