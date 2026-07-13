package org.boostmedia.swissowtbackend.boat;

import org.springframework.stereotype.Component;

@Component
public class BoatMapper {

    public BoatResponse toResponse(Boat boat) {
        return new BoatResponse(
                boat.getId(),
                boat.getName(),
                boat.getDescription(),
                boat.getCreatedAt()
        );
    }
}