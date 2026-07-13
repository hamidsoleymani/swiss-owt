package org.boostmedia.swissowtbackend.boat;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/boats")
public class BoatController {

    private final BoatService service;

    public BoatController(BoatService service) {
        this.service = service;
    }

    @GetMapping
    public Page<BoatResponse> findAll(Pageable pageable) {
        return service.findAll(pageable);
    }

    @PostMapping
    public BoatResponse create(@RequestBody BoatRequest request) {
        return service.create(request);
    }
}
