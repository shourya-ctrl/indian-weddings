// Vendor records for the public website.
//
// There are no approved public vendor listings yet. Until a listings service
// exists, the only vendor records are the homepage's sample listings (VENDORS in
// landingLogic.js). They are reused here, flagged `sample: true`, and every
// surface that shows them must say they are sample listings. Nothing here is a
// real business, rating, price or endorsement.
import { VENDORS } from '../landingLogic';

const slugify = s => s.toLowerCase().normalize('NFKD').replace(/[̀-ͯ]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/**
 * Shape (the fields a real listing will carry; samples fill only some):
 * { id, slug, name, primaryCategory, categories[], vendorTypes[], speciality,
 *   location, serviceAreas[], image, imageAlt, priceGuide, editorial, verification, sample }
 * - vendorTypes: taxonomy type IDs; empty for samples (not assigned).
 * - priceGuide: null unless the vendor has published pricing.
 * - editorial: null, or { featured: true, by, since } from a real editorial flag.
 * - verification: null, or the outcome of a documented check.
 */
export const VENDOR_RECORDS = Object.entries(VENDORS).flatMap(([categoryId, list]) =>
  list.map(v => ({
    id: `sample-${slugify(v.name)}`,
    slug: slugify(v.name),
    name: v.name,
    primaryCategory: categoryId,
    categories: [categoryId],
    vendorTypes: [],
    speciality: v.kind,
    location: v.place,
    serviceAreas: [v.place],
    image: v.img,
    imageAlt: v.alt,
    priceGuide: null,
    editorial: null,
    verification: null,
    sample: true,
  })),
);

export const LOCATIONS = [...new Set(VENDOR_RECORDS.flatMap(v => v.serviceAreas))].sort();

export const isFeatured = v => Boolean(v.editorial && v.editorial.featured);

export const vendorById = id => VENDOR_RECORDS.find(v => v.id === id) || null;
export const vendorBySlug = slug => VENDOR_RECORDS.find(v => v.slug === slug) || null;
