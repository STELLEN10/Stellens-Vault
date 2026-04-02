/* ================================
   STELLEN'S VAULT — SUPABASE CONFIG
================================ */

const SUPABASE_URL = 'https://lwfmncyizaynosyamztr.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx3Zm1uY3lpemF5bm9zeWFtenRyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzQ3ODAyNDYsImV4cCI6MjA5MDM1NjI0Nn0.jVMHgGcapuR1xnWyEf4eL2f7zBilrfXKJC-hFtrDDdI';

// ====== SUPABASE CLIENT (no npm needed — uses CDN) ======
const { createClient } = supabase;
const db = createClient(SUPABASE_URL, SUPABASE_ANON);

// ====== FETCH ALL INFLUENCERS ======
async function fetchInfluencers() {
  const { data, error } = await db
    .from('influencers')
    .select('*')
    .order('created_at', { ascending: false });
  if (error) { console.error('fetchInfluencers:', error); return []; }
  return data;
}

// ====== FETCH RESOURCES (all or by influencer) ======
async function fetchResources(influencerId = null) {
  let query = db
    .from('resources')
    .select('*, influencers(handle, name)')
    .order('votes', { ascending: false });
  if (influencerId) query = query.eq('influencer_id', influencerId);
  const { data, error } = await query;
  if (error) { console.error('fetchResources:', error); return []; }
  return data;
}

// ====== ADD INFLUENCER ======
async function addInfluencer(inf) {
  const { data, error } = await db
    .from('influencers')
    .insert([inf])
    .select()
    .single();
  if (error) { console.error('addInfluencer:', error); return null; }
  return data;
}

// ====== ADD RESOURCE LINK ======
async function addResource(link) {
  const { data, error } = await db
    .from('resources')
    .insert([link])
    .select()
    .single();
  if (error) { console.error('addResource:', error); return null; }
  return data;
}

// ====== UPVOTE ======
async function upvoteResource(id, currentVotes) {
  const { error } = await db
    .from('resources')
    .update({ votes: currentVotes + 1 })
    .eq('id', id);
  if (error) console.error('upvote:', error);
}

// ====== DELETE INFLUENCER ======
async function deleteInfluencer(id) {
  const { error } = await db
    .from('influencers')
    .delete()
    .eq('id', id);
  if (error) { console.error('deleteInfluencer:', error); return false; }
  return true;
}

// ====== DELETE RESOURCE ======
async function deleteResource(id) {
  const { error } = await db
    .from('resources')
    .delete()
    .eq('id', id);
  if (error) { console.error('deleteResource:', error); return false; }
  return true;
}

// ====== FETCH ALL DIGESTS ======
async function fetchDigests() {
  const { data, error } = await db
    .from('digests')
    .select('*')
    .order('issue_number', { ascending: false });
  if (error) { console.error('fetchDigests:', error); return []; }
  return data;
}

// ====== FETCH LATEST PUBLISHED DIGEST WITH RESOURCES ======
async function fetchLatestDigest() {
  const { data, error } = await db
    .from('digests')
    .select('*, digest_resources(position, resources(id, title, url, category, tag, votes, influencers(handle)))')
    .eq('published', true)
    .order('issue_number', { ascending: false })
    .limit(1)
    .single();
  if (error) { return null; }
  return data;
}

// ====== CREATE DIGEST ======
async function createDigest(digest) {
  const { data, error } = await db
    .from('digests')
    .insert([digest])
    .select()
    .single();
  if (error) { console.error('createDigest:', error); return null; }
  return data;
}

// ====== ADD RESOURCE TO DIGEST ======
async function addDigestResource(entry) {
  const { error } = await db
    .from('digest_resources')
    .insert([entry]);
  if (error) console.error('addDigestResource:', error);
}
