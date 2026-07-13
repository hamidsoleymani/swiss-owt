package org.boostmedia.swissowtbackend.boat;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class BoatService {

    private final BoatRepository repository;
    private final BoatMapper mapper;

    public BoatService(BoatRepository repository, BoatMapper mapper) {
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

    public BoatResponse findById(Long id) {

        Boat boat = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Boot not found"));
        return mapper.toResponse(boat);
    }

    public BoatResponse update(Long id, BoatRequest request) {

        Boat boat = repository.findById(id)
                .orElseThrow(() -> new RuntimeException("Boat not found"));
        boat.update(
                request.name(),
                request.description()
        );
        return mapper.toResponse(repository.save(boat));
    }

    public void delete(Long id) {

        if (!repository.existsById(id)) {
            throw new RuntimeException("Boat not found");
        }
        repository.deleteById(id);
    }
}