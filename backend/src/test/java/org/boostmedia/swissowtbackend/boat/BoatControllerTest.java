package org.boostmedia.swissowtbackend.boat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class BoatServiceTest {

    @Mock
    private BoatRepository repository;

    @Mock
    private BoatMapper mapper;

    @InjectMocks
    private BoatService service;

    private Boat boat;
    private BoatRequest request;
    private BoatResponse response;

    @BeforeEach
    void setUp() {

        boat = new Boat(
                "Sea Explorer",
                "Blue sailing boat",
                LocalDateTime.now()
        );

        request = new BoatRequest(
                "Sea Explorer",
                "Blue sailing boat"
        );

        response = new BoatResponse(
                1L,
                "Sea Explorer",
                "Blue sailing boat",
                LocalDateTime.now()
        );

    }

    @Test
    void shouldFindAllBoats() {


        Page<Boat> page =
                new PageImpl<>(List.of(boat));

        when(repository.findAll(PageRequest.of(0, 5)))
                .thenReturn(page);

        when(mapper.toResponse(any(Boat.class)))
                .thenReturn(response);

        Page<BoatResponse> result =
                service.findAll(PageRequest.of(0, 5));

        assertEquals(1, result.getTotalElements());
        assertEquals("Sea Explorer", result.getContent().getFirst().name());

        verify(repository).findAll(PageRequest.of(0, 5));
        verify(mapper).toResponse(any(Boat.class));

    }

    @Test
    void shouldCreateBoat() {


        when(repository.save(any(Boat.class)))
                .thenReturn(boat);

        when(mapper.toResponse(any(Boat.class)))
                .thenReturn(response);

        BoatResponse created =
                service.create(request);

        assertEquals("Sea Explorer", created.name());

        verify(repository).save(any(Boat.class));
        verify(mapper).toResponse(any(Boat.class));

    }

    @Test
    void shouldFindBoatById() {


        when(repository.findById(1L))
                .thenReturn(Optional.of(boat));

        when(mapper.toResponse(boat))
                .thenReturn(response);

        BoatResponse found =
                service.findById(1L);

        assertEquals(1L, found.id());

        verify(repository).findById(1L);

    }

    @Test
    void shouldUpdateBoat() {


        when(repository.findById(1L))
                .thenReturn(Optional.of(boat));

        when(repository.save(any(Boat.class)))
                .thenReturn(boat);

        when(mapper.toResponse(any(Boat.class)))
                .thenReturn(response);

        BoatResponse updated =
                service.update(1L, request);

        assertEquals("Sea Explorer", updated.name());

        verify(repository).findById(1L);
        verify(repository).save(any(Boat.class));

    }

    @Test
    void shouldDeleteBoat() {

        when(repository.existsById(1L))
                .thenReturn(true);

        service.delete(1L);


        verify(repository).existsById(1L);
        verify(repository).deleteById(1L);

    }

    @Test
    void shouldThrowExceptionWhenBoatDoesNotExist() {

        when(repository.findById(1L))
                .thenReturn(Optional.empty());



        RuntimeException exception =
                assertThrows(
                        RuntimeException.class,
                        () -> service.findById(1L)
                );

        assertEquals("Boot not found", exception.getMessage());

    }

}