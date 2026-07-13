package org.boostmedia.swissowtbackend.boat;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BoatService {

    private final BoatRepository repository;
    private final BoatMapper mapper;

    public BoatService(BoatRepository repository,
                       BoatMapper mapper) {
        this.repository = repository;
        this.mapper = mapper;
    }

    public Page<BoatResponse> findAll(Pageable pageable) {

        return repository.findAll(pageable)
                .map(mapper::toResponse);
    }

    public BoatResponse create(BoatRequest request) {

        Boat boat = new Boat(
                request.name(),
                request.description(),
                LocalDateTime.now()
        );

        return mapper.toResponse(repository.save(boat));
    }
}