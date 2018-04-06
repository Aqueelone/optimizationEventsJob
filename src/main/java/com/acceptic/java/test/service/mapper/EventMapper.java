package com.acceptic.java.test.service.mapper;

import com.acceptic.java.test.domain.*;
import com.acceptic.java.test.service.dto.EventDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Event and its DTO EventDTO.
 */
@Mapper(componentModel = "spring", uses = {CampaignMapper.class, PublisherMapper.class})
public interface EventMapper extends EntityMapper<EventDTO, Event> {

    @Mapping(source = "campaign.id", target = "campaignId")
    @Mapping(source = "publisher.id", target = "publisherId")
    EventDTO toDto(Event event);

    @Mapping(source = "campaignId", target = "campaign")
    @Mapping(source = "publisherId", target = "publisher")
    Event toEntity(EventDTO eventDTO);

    default Event fromId(Long id) {
        if (id == null) {
            return null;
        }
        Event event = new Event();
        event.setId(id);
        return event;
    }
}
