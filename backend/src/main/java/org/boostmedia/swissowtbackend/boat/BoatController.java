package org.boostmedia.swissowtbackend.boat;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
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

    @GetMapping("/{id}")
    public BoatResponse findById(@PathVariable Long id) {
        return service.findById(id);
    }

    @PutMapping("/{id}")
    public BoatResponse update(@PathVariable Long id, @RequestBody BoatRequest request) {
        return service.update(id, request);
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void delete(@PathVariable Long id) {
        service.delete(id);
    }
}
