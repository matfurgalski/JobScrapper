package com.matfurgalski.JobScrapper.repository;

import com.matfurgalski.JobScrapper.model.AllOffer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface JobOfferRepository extends JpaRepository<AllOffer.JobOffer, Long> {
}
