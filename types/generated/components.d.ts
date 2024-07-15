import type { Schema, Attribute } from '@strapi/strapi';

export interface StatisticNumberStatisticNumber extends Schema.Component {
  collectionName: 'components_statistic_number_statistic_numbers';
  info: {
    displayName: 'Statistic Number';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    value: Attribute.String & Attribute.Required;
    icon: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'statistic-number.statistic-number': StatisticNumberStatisticNumber;
    }
  }
}
