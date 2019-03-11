<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Article;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return $articles;
    }
 
    public function show($id)
    {
        
        $item = Article::find($id);
        $cat = $item->category;
        $arr = [$item, $cat];
        return response()->json($arr, 201);
    }
    public function getCategory($id) 
    {
        $category = Article::find($id)->category;
        return $category;
    }
    public function store(Request $request)
    {
        $article = Article::create($request->all());
        $article->Category();
        return response()->json($article, 201);
    }
 
    public function update(Request $request, Article $article)
    {
        $article->update($request->all());
 
        return response()->json($article, 200);
    }
 
    public function delete(Article $article)
    {
        $article->delete();
 
        return response()->json(null, 204);
    }
}
