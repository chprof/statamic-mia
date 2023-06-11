<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\Facades\Entry;
use Statamic\Facades\Term;

class EntryController extends Controller
{
  public function getEntriesByTerm(Request $request, $taxonomy, $slug)
  {
      $uri = "/$taxonomy/$slug";
      $term = Term::findByUri($uri);

      if ($term) {
          $entries = Entry::query()
              ->where('collection', 'objects')
              ->whereTaxonomy("{$taxonomy}::{$slug}")
              ->get();

          return response()->json($entries);
      } elseif( $taxonomy && !$term ) {

        $entries = Entry::query()
              ->where('collection', 'objects')
              ->get();

          return response()->json($entries);
      }


      return response()->json(['error' => 'Term not found'], 404);
  }
}
