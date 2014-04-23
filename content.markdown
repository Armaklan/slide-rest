class: center, middle, animated slideInRight

# N'oubliez pas le .red[ReST]

.fa.fa-exchange.big-icon[]

### Par .blue[ZUBER Lionel]

---

class: middle, center, inverse, animated slideInRight

# .red[Mini-Quizz]
## ReST ou pas ReST ?
.fa.fa-question-circle.big-icon.blue[]

---

class: animated slideInRight

## Requête

```XML
<?xml version="1.0"?>
<soap:Envelope
xmlns:soap="http://www.w3.org/2001/12/soap-envelope"
soap:encodingStyle="http://www.w3.org/2001/12/soap-encoding">
 <soap:body pb="http://www.acme.com/phonebook">
  <pb:GetUserDetails>
   <pb:UserID>12345</pb:UserID>
  </pb:GetUserDetails>
 </soap:Body>
</soap:Envelope>
```

???

Bien évident, il s'agit d'un appel .red[SOAP] !

---

class: animated slideInRight

## Requête

```HTTP
GET phonebook/UserDetails/12345 HTTP/1.1
```

## Réponse

```JSON
{
  name: 'ACME Boomerang',
  desc: 'Used by Coyote in <i>Zoom at the Top</i>, 1962',
  price: {
      currency: 'usd',
      quantity: '1',
  },
}
```

???

Cas classique : Appel ReSt standard, résultat JSON


---

class: animated slideInRight

## Requête

```HTTP
GET phonebook/UserDetails/12345 HTTP/1.1
```

## Réponse

```XML
<parts-list>
 <part id="3322">
  <name>ACME Boomerang</name>
  <desc>
   Used by Coyote in <i>Zoom at the Top</i>, 1962
  </desc>
  <price currency="usd" quantity="1">17.32</price>
  <uri>http://www.acme.com/parts/3322</uri>
 </part>
</parts-list>
```

???

- Et oui, mythes  n°1 : ReST n'est pas lié à JSON.
- Format accepté : JSON, XML, CSV

---

class: animated slideInRight

## API

```HTTP
GET     products               // Renvoi la liste des produits
GET     products/123           // Renvoi le produit 123
POST    products/search        // Renvoi une liste de produits filtrées
POST    products/create        // Créé le produit
PUT     products/update/123    // Met à jour le produit
GET     products/delete        // Supprime le produit
```

???

Non respect des règles ReST.

- Pas de présentation en ressources
- Mauvaise utilisation des verbes HTTP
- ...

---

class: animated slideInRight

## API

```HTTP
GET     products         // Renvoi la liste des produits
GET     products?type=1  // Renvoi la liste des produits de type 1
GET     products/123     // Renvoi le produit 123
POST    products         // Créé le produit et le renvoi à jour
PUT     products         // Met à jour le produit
DELETE  products         // Supprime le produit
```

???

API Standard et type ReST

- Un seul endpoint "products"
- Verbe HTTP définit ce que l'on fait

---

class: middle, center, inverse animated slideInRight

# Du reste au .red[ReST]

---

class: middle, center animated slideInRight inverse

# .red[Style] Architecture

### .fa.fa-home.big-icon.blue[]

???

- Des guidelines et bonne pratique
- On n'explique pas le "comment" ni même les technologies

---

class: middle, center animated slideInRight inverse

# Architecture
# Client-Serveur

### .fa.fa-sitemap.big-icon.blue[]

???

- Architecture type SOA (Service Oriented Architecture)
- On parle de "style d'architecture"

---

class: middle, center animated slideInRight

## .red[Browser] en tant que Client

![Client to Server](img/cli-serv.png)

---

class: middle, center animated slideInRight

## .red[Serveur] en tant que Client

![Client to Server](img/serv-serv.png)


---

class: middle, center animated slideInRight inverse

## Flux .red[Fichier]
## .blue[RMI] et .blue[CORBA]
## .red[SOAP]
## .gray[ReST]

---

class: middle, center animated slideInRight, inverse

# Stateless

---

class: middle, center animated slideInRight

# Pas de .red[dépendance] entre appel

### .fa.fa-random.big-icon.red[]

---

class: middle, center animated slideInRight

# Deux appels
# =
# .red[Un] résultat

---

class: middle, center animated slideInRight, inverse

# Interface Uniforme

---

class: middle, center, animated, slideInRight

# .red[Resources]
## 1 URL = 1 objets

---

class: middle, animated, slideInRight

# Resource .red[Product]

```HTTP
GET     products         // Renvoi la liste des produits
GET     products?type=1  // Renvoi la liste des produits de type 1
GET     products/123     // Renvoi le produit 123
POST    products         // Créé le produit et le renvoi à jour
PUT     products         // Met à jour le produit
DELETE  products         // Supprime le produit
```

---

class: middle, center animated slideInRight inverse

# Proche de .red[HTTP]

---

class: middle, animated, slideInRight


# Actions = .red[Verbes] HTTP

```HTTP
GET /{id}   Récupération d'un objet
GET /       Recherche
PUT /       Mise à jour
POST /      Nouvel objet
DELETE /    Suppression
PATCH /     Mise à jour partielle
...
```

---

class: middle, animated, slideInRight

# Code .red[Retour] HTTP

- __200__ OK
- __404__ Not Found
- __403__ Forbidden
- __418__ I'm a teapot
- __204__ No Content
- ...

### <a href="http://fr.wikipedia.org/wiki/Liste_des_codes_HTTP">RTF Wikipedia</a>

---

class: middle, center, inverse animated slideInRight

# How To ...

---

class: middle, center animated slideInRight inverse

# Authentification

.fa.fa-users.big-icon.blue[]

---

class: middle, center animated slideInRight

# Session

### Arg... Le .red[stateless] !

---

class: middle, center animated slideInRight

# Tokens

### Dans l'url... Ou mieux, dans le .red[__header__] !

###Protocole .red[oAuth]

---

class: middle, center animated slideInRight inverse

# Versionning

### Pour les API public !

---

class: middle, center animated slideInRight

# Dans l'url

http://myhost/.red[v1]/chiens

---

class: middle, center animated slideInRight

# Dans le header

```HTTP
Accept:application/vnd.example.v1+json
```

---

class: middle, center animated slideInRight inverse

# Cache

.fa.fa-cloud-download.big-icon[]

```HTTP
Cache-Control: public; max-age=3600
```

---

class: middle, center animated slideInRight, inverse

# Documentation

.fa.fa-align-left.big-icon.blue[]

---

class: middle, center animated slideInRight

# HTML !

###Peu de standardisation...

---

class: middle, center animated slideInRight

# WSDL

### Assez lourd...
### Adapté à du .red[Soap], pas du Rest

---

class: middle, animated slideInRight

# WADL

```XML
<method name="GET" id="ItemSearch">
 <request>
  <param name="Service" style="query"
   fixed="AWSECommerceService"/>
  <param name="Version" style="query" fixed="2005-07-26"/>
  <param name="Operation" style="query" fixed="ItemSearch"/>
  <param name="SubscriptionId" style="query"
   type="xsd:string" required="true"/>
  <param name="SearchIndex" style="query"
   type="aws:SearchIndexType" required="true">
    <option value="Books"/>
    <option value="DVD"/>
    <option value="Music"/>
  </param>
 </request>
 <response>
  <representation mediaType="text/xml"
   element="aws:ItemSearchResponse"/>
 </response>
</method>
```

---

class: middle, center, animated slideInRight inverse

# Hypermedia

## Du .red[lien] dans votre ReST

---

class: middle, animated slideInRight

# Ancienne approche

```JSON
{
  name: 'ACME Boomerang',
  desc: 'Used by Coyote in <i>Zoom at the Top</i>, 1962',
  price: {
      currency: 'usd',
      quantity: '1',
  },
  client: {
      id: 42
  }
}
```

---

class: middle, animated slideInRight

# Nouvelle approche

```JSON
{
  name: 'ACME Boomerang',
  desc: 'Used by Coyote in <i>Zoom at the Top</i>, 1962',
  price: {
      currency: 'usd',
      quantity: '1',
  },
  client: {
      href: '/clients/42'
  }
}
```

---

class: middle, center, animated slideInRight inverse

# .red[ReST] Vs .blue[SOAP]

---

class: middle, center, animated slideInRight

# Avantages .red[ReST] !
.fa.fa-plus-circle.big-icon.blue[]
### Simplicité
### Performance
### Orienté Web

---

class: middle, center, animated slideInRight

# Avantages .red[SOAP] !
.fa.fa-plus-circle.big-icon.blue[]
### Rigueur
### Contexte non HTTP (JMS, Pigeon, ...)

---

class: middle, center, animated slideInRight inverse

# That's all folks !

###.fa.fa-beer.big-icon.blue[]

#### Created using <a href="https://daringfireball.net/projects/markdown/">Markdown</a>
#### and <a href="http://remarkjs.com/">Remark.js</a>
