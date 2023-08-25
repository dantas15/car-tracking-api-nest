import { Client as GoogleClient } from '@googlemaps/google-maps-services-js';
import { ConfigService } from '@nestjs/config';
import { Controller, Get, Query } from '@nestjs/common';
import { DirectionsService } from './directions.service';

@Controller('directions')
export class DirectionsController {
  constructor(private directionsService: DirectionsService) {}

  @Get()
  getDirections(
    @Query('originId') originId: string,
    @Query('destinationId') destinationId: string,
  ) {
    return this.directionsService.getDirections(originId, destinationId);
  }
}
